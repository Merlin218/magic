<?php

declare(strict_types=1);
/**
 * Copyright (c) The Magic , Distributed under the software license
 */

namespace App\Domain\KnowledgeBase\Event;

use App\Domain\KnowledgeBase\Entity\KnowledgeBaseEntity;
use App\Domain\KnowledgeBase\Entity\ValueObject\DocumentFile\DocumentFileInterface;

class KnowledgeBaseSavedEvent
{
    public function __construct(
        public KnowledgeBaseEntity $magicFlowKnowledgeEntity,
        public bool $create,
        /** @var DocumentFileInterface[] $documentFiles */
        public array $documentFiles = [],
    ) {
    }
}

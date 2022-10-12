import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsUpdateWithoutMove_meta_stat_changesInput } from './stats-update-without-move-meta-stat-changes.input';
import { Type } from 'class-transformer';
import { statsCreateWithoutMove_meta_stat_changesInput } from './stats-create-without-move-meta-stat-changes.input';

@InputType()
export class statsUpsertWithoutMove_meta_stat_changesInput {

    @Field(() => statsUpdateWithoutMove_meta_stat_changesInput, {nullable:false})
    @Type(() => statsUpdateWithoutMove_meta_stat_changesInput)
    update!: statsUpdateWithoutMove_meta_stat_changesInput;

    @Field(() => statsCreateWithoutMove_meta_stat_changesInput, {nullable:false})
    @Type(() => statsCreateWithoutMove_meta_stat_changesInput)
    create!: statsCreateWithoutMove_meta_stat_changesInput;
}

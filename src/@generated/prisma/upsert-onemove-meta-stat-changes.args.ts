import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_stat_changesWhereUniqueInput } from '../move-meta-stat-changes/move-meta-stat-changes-where-unique.input';
import { Type } from 'class-transformer';
import { move_meta_stat_changesCreateInput } from '../move-meta-stat-changes/move-meta-stat-changes-create.input';
import { move_meta_stat_changesUpdateInput } from '../move-meta-stat-changes/move-meta-stat-changes-update.input';

@ArgsType()
export class UpsertOnemoveMetaStatChangesArgs {

    @Field(() => move_meta_stat_changesWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_stat_changesWhereUniqueInput)
    where!: move_meta_stat_changesWhereUniqueInput;

    @Field(() => move_meta_stat_changesCreateInput, {nullable:false})
    @Type(() => move_meta_stat_changesCreateInput)
    create!: move_meta_stat_changesCreateInput;

    @Field(() => move_meta_stat_changesUpdateInput, {nullable:false})
    @Type(() => move_meta_stat_changesUpdateInput)
    update!: move_meta_stat_changesUpdateInput;
}

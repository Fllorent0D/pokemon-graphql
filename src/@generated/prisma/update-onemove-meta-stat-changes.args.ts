import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_stat_changesUpdateInput } from '../move-meta-stat-changes/move-meta-stat-changes-update.input';
import { Type } from 'class-transformer';
import { move_meta_stat_changesWhereUniqueInput } from '../move-meta-stat-changes/move-meta-stat-changes-where-unique.input';

@ArgsType()
export class UpdateOnemoveMetaStatChangesArgs {

    @Field(() => move_meta_stat_changesUpdateInput, {nullable:false})
    @Type(() => move_meta_stat_changesUpdateInput)
    data!: move_meta_stat_changesUpdateInput;

    @Field(() => move_meta_stat_changesWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_stat_changesWhereUniqueInput)
    where!: move_meta_stat_changesWhereUniqueInput;
}

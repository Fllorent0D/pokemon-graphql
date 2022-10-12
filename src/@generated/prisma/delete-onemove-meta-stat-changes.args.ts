import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_stat_changesWhereUniqueInput } from '../move-meta-stat-changes/move-meta-stat-changes-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnemoveMetaStatChangesArgs {

    @Field(() => move_meta_stat_changesWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_stat_changesWhereUniqueInput)
    where!: move_meta_stat_changesWhereUniqueInput;
}

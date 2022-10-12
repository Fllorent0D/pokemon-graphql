import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_stat_changesCreateInput } from '../move-meta-stat-changes/move-meta-stat-changes-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveMetaStatChangesArgs {

    @Field(() => move_meta_stat_changesCreateInput, {nullable:false})
    @Type(() => move_meta_stat_changesCreateInput)
    data!: move_meta_stat_changesCreateInput;
}

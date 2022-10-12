import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_target_proseWhereUniqueInput } from '../move-target-prose/move-target-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_target_proseCreateInput } from '../move-target-prose/move-target-prose-create.input';
import { move_target_proseUpdateInput } from '../move-target-prose/move-target-prose-update.input';

@ArgsType()
export class UpsertOnemoveTargetProseArgs {

    @Field(() => move_target_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_target_proseWhereUniqueInput)
    where!: move_target_proseWhereUniqueInput;

    @Field(() => move_target_proseCreateInput, {nullable:false})
    @Type(() => move_target_proseCreateInput)
    create!: move_target_proseCreateInput;

    @Field(() => move_target_proseUpdateInput, {nullable:false})
    @Type(() => move_target_proseUpdateInput)
    update!: move_target_proseUpdateInput;
}

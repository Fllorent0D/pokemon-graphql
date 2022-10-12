import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_target_proseUpdateInput } from '../move-target-prose/move-target-prose-update.input';
import { Type } from 'class-transformer';
import { move_target_proseWhereUniqueInput } from '../move-target-prose/move-target-prose-where-unique.input';

@ArgsType()
export class UpdateOnemoveTargetProseArgs {

    @Field(() => move_target_proseUpdateInput, {nullable:false})
    @Type(() => move_target_proseUpdateInput)
    data!: move_target_proseUpdateInput;

    @Field(() => move_target_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_target_proseWhereUniqueInput)
    where!: move_target_proseWhereUniqueInput;
}

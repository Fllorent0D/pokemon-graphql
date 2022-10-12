import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_target_proseCreateInput } from '../move-target-prose/move-target-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveTargetProseArgs {

    @Field(() => move_target_proseCreateInput, {nullable:false})
    @Type(() => move_target_proseCreateInput)
    data!: move_target_proseCreateInput;
}

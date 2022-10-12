import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_target_proseWhereUniqueInput } from '../move-target-prose/move-target-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnemoveTargetProseArgs {

    @Field(() => move_target_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_target_proseWhereUniqueInput)
    where!: move_target_proseWhereUniqueInput;
}

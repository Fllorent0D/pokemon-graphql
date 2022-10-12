import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_target_proseWhereUniqueInput } from './move-target-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_target_proseUpdateWithoutMove_targetsInput } from './move-target-prose-update-without-move-targets.input';

@InputType()
export class move_target_proseUpdateWithWhereUniqueWithoutMove_targetsInput {

    @Field(() => move_target_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_target_proseWhereUniqueInput)
    where!: move_target_proseWhereUniqueInput;

    @Field(() => move_target_proseUpdateWithoutMove_targetsInput, {nullable:false})
    @Type(() => move_target_proseUpdateWithoutMove_targetsInput)
    data!: move_target_proseUpdateWithoutMove_targetsInput;
}

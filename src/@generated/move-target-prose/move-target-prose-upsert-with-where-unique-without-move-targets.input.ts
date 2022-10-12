import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_target_proseWhereUniqueInput } from './move-target-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_target_proseUpdateWithoutMove_targetsInput } from './move-target-prose-update-without-move-targets.input';
import { move_target_proseCreateWithoutMove_targetsInput } from './move-target-prose-create-without-move-targets.input';

@InputType()
export class move_target_proseUpsertWithWhereUniqueWithoutMove_targetsInput {

    @Field(() => move_target_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_target_proseWhereUniqueInput)
    where!: move_target_proseWhereUniqueInput;

    @Field(() => move_target_proseUpdateWithoutMove_targetsInput, {nullable:false})
    @Type(() => move_target_proseUpdateWithoutMove_targetsInput)
    update!: move_target_proseUpdateWithoutMove_targetsInput;

    @Field(() => move_target_proseCreateWithoutMove_targetsInput, {nullable:false})
    @Type(() => move_target_proseCreateWithoutMove_targetsInput)
    create!: move_target_proseCreateWithoutMove_targetsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_targetsUpdateWithoutMove_target_proseInput } from './move-targets-update-without-move-target-prose.input';
import { Type } from 'class-transformer';
import { move_targetsCreateWithoutMove_target_proseInput } from './move-targets-create-without-move-target-prose.input';

@InputType()
export class move_targetsUpsertWithoutMove_target_proseInput {

    @Field(() => move_targetsUpdateWithoutMove_target_proseInput, {nullable:false})
    @Type(() => move_targetsUpdateWithoutMove_target_proseInput)
    update!: move_targetsUpdateWithoutMove_target_proseInput;

    @Field(() => move_targetsCreateWithoutMove_target_proseInput, {nullable:false})
    @Type(() => move_targetsCreateWithoutMove_target_proseInput)
    create!: move_targetsCreateWithoutMove_target_proseInput;
}

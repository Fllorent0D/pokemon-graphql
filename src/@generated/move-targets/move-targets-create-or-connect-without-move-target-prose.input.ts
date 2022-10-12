import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_targetsWhereUniqueInput } from './move-targets-where-unique.input';
import { Type } from 'class-transformer';
import { move_targetsCreateWithoutMove_target_proseInput } from './move-targets-create-without-move-target-prose.input';

@InputType()
export class move_targetsCreateOrConnectWithoutMove_target_proseInput {

    @Field(() => move_targetsWhereUniqueInput, {nullable:false})
    @Type(() => move_targetsWhereUniqueInput)
    where!: move_targetsWhereUniqueInput;

    @Field(() => move_targetsCreateWithoutMove_target_proseInput, {nullable:false})
    @Type(() => move_targetsCreateWithoutMove_target_proseInput)
    create!: move_targetsCreateWithoutMove_target_proseInput;
}

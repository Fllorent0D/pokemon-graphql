import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_targetsCreateWithoutMove_target_proseInput } from './move-targets-create-without-move-target-prose.input';
import { Type } from 'class-transformer';
import { move_targetsCreateOrConnectWithoutMove_target_proseInput } from './move-targets-create-or-connect-without-move-target-prose.input';
import { move_targetsWhereUniqueInput } from './move-targets-where-unique.input';

@InputType()
export class move_targetsCreateNestedOneWithoutMove_target_proseInput {

    @Field(() => move_targetsCreateWithoutMove_target_proseInput, {nullable:true})
    @Type(() => move_targetsCreateWithoutMove_target_proseInput)
    create?: move_targetsCreateWithoutMove_target_proseInput;

    @Field(() => move_targetsCreateOrConnectWithoutMove_target_proseInput, {nullable:true})
    @Type(() => move_targetsCreateOrConnectWithoutMove_target_proseInput)
    connectOrCreate?: move_targetsCreateOrConnectWithoutMove_target_proseInput;

    @Field(() => move_targetsWhereUniqueInput, {nullable:true})
    @Type(() => move_targetsWhereUniqueInput)
    connect?: move_targetsWhereUniqueInput;
}

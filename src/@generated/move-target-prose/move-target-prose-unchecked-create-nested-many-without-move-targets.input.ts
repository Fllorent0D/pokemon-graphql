import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_target_proseCreateWithoutMove_targetsInput } from './move-target-prose-create-without-move-targets.input';
import { Type } from 'class-transformer';
import { move_target_proseCreateOrConnectWithoutMove_targetsInput } from './move-target-prose-create-or-connect-without-move-targets.input';
import { move_target_proseWhereUniqueInput } from './move-target-prose-where-unique.input';

@InputType()
export class move_target_proseUncheckedCreateNestedManyWithoutMove_targetsInput {

    @Field(() => [move_target_proseCreateWithoutMove_targetsInput], {nullable:true})
    @Type(() => move_target_proseCreateWithoutMove_targetsInput)
    create?: Array<move_target_proseCreateWithoutMove_targetsInput>;

    @Field(() => [move_target_proseCreateOrConnectWithoutMove_targetsInput], {nullable:true})
    @Type(() => move_target_proseCreateOrConnectWithoutMove_targetsInput)
    connectOrCreate?: Array<move_target_proseCreateOrConnectWithoutMove_targetsInput>;

    @Field(() => [move_target_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_target_proseWhereUniqueInput)
    connect?: Array<move_target_proseWhereUniqueInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flag_proseCreateWithoutMove_flagsInput } from './move-flag-prose-create-without-move-flags.input';
import { Type } from 'class-transformer';
import { move_flag_proseCreateOrConnectWithoutMove_flagsInput } from './move-flag-prose-create-or-connect-without-move-flags.input';
import { move_flag_proseWhereUniqueInput } from './move-flag-prose-where-unique.input';

@InputType()
export class move_flag_proseCreateNestedManyWithoutMove_flagsInput {

    @Field(() => [move_flag_proseCreateWithoutMove_flagsInput], {nullable:true})
    @Type(() => move_flag_proseCreateWithoutMove_flagsInput)
    create?: Array<move_flag_proseCreateWithoutMove_flagsInput>;

    @Field(() => [move_flag_proseCreateOrConnectWithoutMove_flagsInput], {nullable:true})
    @Type(() => move_flag_proseCreateOrConnectWithoutMove_flagsInput)
    connectOrCreate?: Array<move_flag_proseCreateOrConnectWithoutMove_flagsInput>;

    @Field(() => [move_flag_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_flag_proseWhereUniqueInput)
    connect?: Array<move_flag_proseWhereUniqueInput>;
}

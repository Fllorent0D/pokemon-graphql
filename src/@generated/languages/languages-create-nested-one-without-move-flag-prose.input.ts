import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutMove_flag_proseInput } from './languages-create-without-move-flag-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutMove_flag_proseInput } from './languages-create-or-connect-without-move-flag-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutMove_flag_proseInput {

    @Field(() => languagesCreateWithoutMove_flag_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutMove_flag_proseInput)
    create?: languagesCreateWithoutMove_flag_proseInput;

    @Field(() => languagesCreateOrConnectWithoutMove_flag_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutMove_flag_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutMove_flag_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutMove_flavor_textInput } from './languages-create-without-move-flavor-text.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutMove_flavor_textInput } from './languages-create-or-connect-without-move-flavor-text.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutMove_flavor_textInput {

    @Field(() => languagesCreateWithoutMove_flavor_textInput, {nullable:true})
    @Type(() => languagesCreateWithoutMove_flavor_textInput)
    create?: languagesCreateWithoutMove_flavor_textInput;

    @Field(() => languagesCreateOrConnectWithoutMove_flavor_textInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutMove_flavor_textInput)
    connectOrCreate?: languagesCreateOrConnectWithoutMove_flavor_textInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}

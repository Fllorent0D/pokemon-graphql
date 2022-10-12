import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutItem_flavor_textInput } from './languages-create-without-item-flavor-text.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutItem_flavor_textInput } from './languages-create-or-connect-without-item-flavor-text.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutItem_flavor_textInput {

    @Field(() => languagesCreateWithoutItem_flavor_textInput, {nullable:true})
    @Type(() => languagesCreateWithoutItem_flavor_textInput)
    create?: languagesCreateWithoutItem_flavor_textInput;

    @Field(() => languagesCreateOrConnectWithoutItem_flavor_textInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutItem_flavor_textInput)
    connectOrCreate?: languagesCreateOrConnectWithoutItem_flavor_textInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}

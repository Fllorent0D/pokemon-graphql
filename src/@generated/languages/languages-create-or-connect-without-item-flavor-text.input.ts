import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutItem_flavor_textInput } from './languages-create-without-item-flavor-text.input';

@InputType()
export class languagesCreateOrConnectWithoutItem_flavor_textInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutItem_flavor_textInput, {nullable:false})
    @Type(() => languagesCreateWithoutItem_flavor_textInput)
    create!: languagesCreateWithoutItem_flavor_textInput;
}

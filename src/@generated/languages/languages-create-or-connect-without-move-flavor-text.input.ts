import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutMove_flavor_textInput } from './languages-create-without-move-flavor-text.input';

@InputType()
export class languagesCreateOrConnectWithoutMove_flavor_textInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutMove_flavor_textInput, {nullable:false})
    @Type(() => languagesCreateWithoutMove_flavor_textInput)
    create!: languagesCreateWithoutMove_flavor_textInput;
}

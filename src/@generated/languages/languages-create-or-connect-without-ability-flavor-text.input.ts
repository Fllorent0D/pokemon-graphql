import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutAbility_flavor_textInput } from './languages-create-without-ability-flavor-text.input';

@InputType()
export class languagesCreateOrConnectWithoutAbility_flavor_textInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutAbility_flavor_textInput, {nullable:false})
    @Type(() => languagesCreateWithoutAbility_flavor_textInput)
    create!: languagesCreateWithoutAbility_flavor_textInput;
}

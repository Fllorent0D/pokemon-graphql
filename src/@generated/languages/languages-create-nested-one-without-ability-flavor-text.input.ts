import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutAbility_flavor_textInput } from './languages-create-without-ability-flavor-text.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutAbility_flavor_textInput } from './languages-create-or-connect-without-ability-flavor-text.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutAbility_flavor_textInput {

    @Field(() => languagesCreateWithoutAbility_flavor_textInput, {nullable:true})
    @Type(() => languagesCreateWithoutAbility_flavor_textInput)
    create?: languagesCreateWithoutAbility_flavor_textInput;

    @Field(() => languagesCreateOrConnectWithoutAbility_flavor_textInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutAbility_flavor_textInput)
    connectOrCreate?: languagesCreateOrConnectWithoutAbility_flavor_textInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesCreateWithoutAbility_flavor_textInput } from './abilities-create-without-ability-flavor-text.input';
import { Type } from 'class-transformer';
import { abilitiesCreateOrConnectWithoutAbility_flavor_textInput } from './abilities-create-or-connect-without-ability-flavor-text.input';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';

@InputType()
export class abilitiesCreateNestedOneWithoutAbility_flavor_textInput {

    @Field(() => abilitiesCreateWithoutAbility_flavor_textInput, {nullable:true})
    @Type(() => abilitiesCreateWithoutAbility_flavor_textInput)
    create?: abilitiesCreateWithoutAbility_flavor_textInput;

    @Field(() => abilitiesCreateOrConnectWithoutAbility_flavor_textInput, {nullable:true})
    @Type(() => abilitiesCreateOrConnectWithoutAbility_flavor_textInput)
    connectOrCreate?: abilitiesCreateOrConnectWithoutAbility_flavor_textInput;

    @Field(() => abilitiesWhereUniqueInput, {nullable:true})
    @Type(() => abilitiesWhereUniqueInput)
    connect?: abilitiesWhereUniqueInput;
}

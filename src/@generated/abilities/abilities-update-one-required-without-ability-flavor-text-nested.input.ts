import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesCreateWithoutAbility_flavor_textInput } from './abilities-create-without-ability-flavor-text.input';
import { Type } from 'class-transformer';
import { abilitiesCreateOrConnectWithoutAbility_flavor_textInput } from './abilities-create-or-connect-without-ability-flavor-text.input';
import { abilitiesUpsertWithoutAbility_flavor_textInput } from './abilities-upsert-without-ability-flavor-text.input';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { abilitiesUpdateWithoutAbility_flavor_textInput } from './abilities-update-without-ability-flavor-text.input';

@InputType()
export class abilitiesUpdateOneRequiredWithoutAbility_flavor_textNestedInput {

    @Field(() => abilitiesCreateWithoutAbility_flavor_textInput, {nullable:true})
    @Type(() => abilitiesCreateWithoutAbility_flavor_textInput)
    create?: abilitiesCreateWithoutAbility_flavor_textInput;

    @Field(() => abilitiesCreateOrConnectWithoutAbility_flavor_textInput, {nullable:true})
    @Type(() => abilitiesCreateOrConnectWithoutAbility_flavor_textInput)
    connectOrCreate?: abilitiesCreateOrConnectWithoutAbility_flavor_textInput;

    @Field(() => abilitiesUpsertWithoutAbility_flavor_textInput, {nullable:true})
    @Type(() => abilitiesUpsertWithoutAbility_flavor_textInput)
    upsert?: abilitiesUpsertWithoutAbility_flavor_textInput;

    @Field(() => abilitiesWhereUniqueInput, {nullable:true})
    @Type(() => abilitiesWhereUniqueInput)
    connect?: abilitiesWhereUniqueInput;

    @Field(() => abilitiesUpdateWithoutAbility_flavor_textInput, {nullable:true})
    @Type(() => abilitiesUpdateWithoutAbility_flavor_textInput)
    update?: abilitiesUpdateWithoutAbility_flavor_textInput;
}

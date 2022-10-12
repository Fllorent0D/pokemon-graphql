import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesCreateWithoutAbility_namesInput } from './abilities-create-without-ability-names.input';
import { Type } from 'class-transformer';
import { abilitiesCreateOrConnectWithoutAbility_namesInput } from './abilities-create-or-connect-without-ability-names.input';
import { abilitiesUpsertWithoutAbility_namesInput } from './abilities-upsert-without-ability-names.input';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { abilitiesUpdateWithoutAbility_namesInput } from './abilities-update-without-ability-names.input';

@InputType()
export class abilitiesUpdateOneRequiredWithoutAbility_namesNestedInput {

    @Field(() => abilitiesCreateWithoutAbility_namesInput, {nullable:true})
    @Type(() => abilitiesCreateWithoutAbility_namesInput)
    create?: abilitiesCreateWithoutAbility_namesInput;

    @Field(() => abilitiesCreateOrConnectWithoutAbility_namesInput, {nullable:true})
    @Type(() => abilitiesCreateOrConnectWithoutAbility_namesInput)
    connectOrCreate?: abilitiesCreateOrConnectWithoutAbility_namesInput;

    @Field(() => abilitiesUpsertWithoutAbility_namesInput, {nullable:true})
    @Type(() => abilitiesUpsertWithoutAbility_namesInput)
    upsert?: abilitiesUpsertWithoutAbility_namesInput;

    @Field(() => abilitiesWhereUniqueInput, {nullable:true})
    @Type(() => abilitiesWhereUniqueInput)
    connect?: abilitiesWhereUniqueInput;

    @Field(() => abilitiesUpdateWithoutAbility_namesInput, {nullable:true})
    @Type(() => abilitiesUpdateWithoutAbility_namesInput)
    update?: abilitiesUpdateWithoutAbility_namesInput;
}

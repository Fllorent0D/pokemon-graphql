import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesCreateWithoutAbility_proseInput } from './abilities-create-without-ability-prose.input';
import { Type } from 'class-transformer';
import { abilitiesCreateOrConnectWithoutAbility_proseInput } from './abilities-create-or-connect-without-ability-prose.input';
import { abilitiesUpsertWithoutAbility_proseInput } from './abilities-upsert-without-ability-prose.input';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { abilitiesUpdateWithoutAbility_proseInput } from './abilities-update-without-ability-prose.input';

@InputType()
export class abilitiesUpdateOneRequiredWithoutAbility_proseNestedInput {

    @Field(() => abilitiesCreateWithoutAbility_proseInput, {nullable:true})
    @Type(() => abilitiesCreateWithoutAbility_proseInput)
    create?: abilitiesCreateWithoutAbility_proseInput;

    @Field(() => abilitiesCreateOrConnectWithoutAbility_proseInput, {nullable:true})
    @Type(() => abilitiesCreateOrConnectWithoutAbility_proseInput)
    connectOrCreate?: abilitiesCreateOrConnectWithoutAbility_proseInput;

    @Field(() => abilitiesUpsertWithoutAbility_proseInput, {nullable:true})
    @Type(() => abilitiesUpsertWithoutAbility_proseInput)
    upsert?: abilitiesUpsertWithoutAbility_proseInput;

    @Field(() => abilitiesWhereUniqueInput, {nullable:true})
    @Type(() => abilitiesWhereUniqueInput)
    connect?: abilitiesWhereUniqueInput;

    @Field(() => abilitiesUpdateWithoutAbility_proseInput, {nullable:true})
    @Type(() => abilitiesUpdateWithoutAbility_proseInput)
    update?: abilitiesUpdateWithoutAbility_proseInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesCreateWithoutAbility_proseInput } from './abilities-create-without-ability-prose.input';
import { Type } from 'class-transformer';
import { abilitiesCreateOrConnectWithoutAbility_proseInput } from './abilities-create-or-connect-without-ability-prose.input';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';

@InputType()
export class abilitiesCreateNestedOneWithoutAbility_proseInput {

    @Field(() => abilitiesCreateWithoutAbility_proseInput, {nullable:true})
    @Type(() => abilitiesCreateWithoutAbility_proseInput)
    create?: abilitiesCreateWithoutAbility_proseInput;

    @Field(() => abilitiesCreateOrConnectWithoutAbility_proseInput, {nullable:true})
    @Type(() => abilitiesCreateOrConnectWithoutAbility_proseInput)
    connectOrCreate?: abilitiesCreateOrConnectWithoutAbility_proseInput;

    @Field(() => abilitiesWhereUniqueInput, {nullable:true})
    @Type(() => abilitiesWhereUniqueInput)
    connect?: abilitiesWhereUniqueInput;
}

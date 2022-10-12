import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesCreateWithoutAbility_namesInput } from './abilities-create-without-ability-names.input';
import { Type } from 'class-transformer';
import { abilitiesCreateOrConnectWithoutAbility_namesInput } from './abilities-create-or-connect-without-ability-names.input';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';

@InputType()
export class abilitiesCreateNestedOneWithoutAbility_namesInput {

    @Field(() => abilitiesCreateWithoutAbility_namesInput, {nullable:true})
    @Type(() => abilitiesCreateWithoutAbility_namesInput)
    create?: abilitiesCreateWithoutAbility_namesInput;

    @Field(() => abilitiesCreateOrConnectWithoutAbility_namesInput, {nullable:true})
    @Type(() => abilitiesCreateOrConnectWithoutAbility_namesInput)
    connectOrCreate?: abilitiesCreateOrConnectWithoutAbility_namesInput;

    @Field(() => abilitiesWhereUniqueInput, {nullable:true})
    @Type(() => abilitiesWhereUniqueInput)
    connect?: abilitiesWhereUniqueInput;
}

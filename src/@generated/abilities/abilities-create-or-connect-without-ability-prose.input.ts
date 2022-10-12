import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { Type } from 'class-transformer';
import { abilitiesCreateWithoutAbility_proseInput } from './abilities-create-without-ability-prose.input';

@InputType()
export class abilitiesCreateOrConnectWithoutAbility_proseInput {

    @Field(() => abilitiesWhereUniqueInput, {nullable:false})
    @Type(() => abilitiesWhereUniqueInput)
    where!: abilitiesWhereUniqueInput;

    @Field(() => abilitiesCreateWithoutAbility_proseInput, {nullable:false})
    @Type(() => abilitiesCreateWithoutAbility_proseInput)
    create!: abilitiesCreateWithoutAbility_proseInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesUpdateWithoutAbility_proseInput } from './abilities-update-without-ability-prose.input';
import { Type } from 'class-transformer';
import { abilitiesCreateWithoutAbility_proseInput } from './abilities-create-without-ability-prose.input';

@InputType()
export class abilitiesUpsertWithoutAbility_proseInput {

    @Field(() => abilitiesUpdateWithoutAbility_proseInput, {nullable:false})
    @Type(() => abilitiesUpdateWithoutAbility_proseInput)
    update!: abilitiesUpdateWithoutAbility_proseInput;

    @Field(() => abilitiesCreateWithoutAbility_proseInput, {nullable:false})
    @Type(() => abilitiesCreateWithoutAbility_proseInput)
    create!: abilitiesCreateWithoutAbility_proseInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesUpdateWithoutAbility_flavor_textInput } from './abilities-update-without-ability-flavor-text.input';
import { Type } from 'class-transformer';
import { abilitiesCreateWithoutAbility_flavor_textInput } from './abilities-create-without-ability-flavor-text.input';

@InputType()
export class abilitiesUpsertWithoutAbility_flavor_textInput {

    @Field(() => abilitiesUpdateWithoutAbility_flavor_textInput, {nullable:false})
    @Type(() => abilitiesUpdateWithoutAbility_flavor_textInput)
    update!: abilitiesUpdateWithoutAbility_flavor_textInput;

    @Field(() => abilitiesCreateWithoutAbility_flavor_textInput, {nullable:false})
    @Type(() => abilitiesCreateWithoutAbility_flavor_textInput)
    create!: abilitiesCreateWithoutAbility_flavor_textInput;
}

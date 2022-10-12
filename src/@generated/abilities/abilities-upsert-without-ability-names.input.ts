import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesUpdateWithoutAbility_namesInput } from './abilities-update-without-ability-names.input';
import { Type } from 'class-transformer';
import { abilitiesCreateWithoutAbility_namesInput } from './abilities-create-without-ability-names.input';

@InputType()
export class abilitiesUpsertWithoutAbility_namesInput {

    @Field(() => abilitiesUpdateWithoutAbility_namesInput, {nullable:false})
    @Type(() => abilitiesUpdateWithoutAbility_namesInput)
    update!: abilitiesUpdateWithoutAbility_namesInput;

    @Field(() => abilitiesCreateWithoutAbility_namesInput, {nullable:false})
    @Type(() => abilitiesCreateWithoutAbility_namesInput)
    create!: abilitiesCreateWithoutAbility_namesInput;
}

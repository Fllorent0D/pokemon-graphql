import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsUpdateWithoutPokemon_formsInput } from './version-groups-update-without-pokemon-forms.input';
import { Type } from 'class-transformer';
import { version_groupsCreateWithoutPokemon_formsInput } from './version-groups-create-without-pokemon-forms.input';

@InputType()
export class version_groupsUpsertWithoutPokemon_formsInput {

    @Field(() => version_groupsUpdateWithoutPokemon_formsInput, {nullable:false})
    @Type(() => version_groupsUpdateWithoutPokemon_formsInput)
    update!: version_groupsUpdateWithoutPokemon_formsInput;

    @Field(() => version_groupsCreateWithoutPokemon_formsInput, {nullable:false})
    @Type(() => version_groupsCreateWithoutPokemon_formsInput)
    create!: version_groupsCreateWithoutPokemon_formsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { version_groupsCreateWithoutPokemon_formsInput } from './version-groups-create-without-pokemon-forms.input';

@InputType()
export class version_groupsCreateOrConnectWithoutPokemon_formsInput {

    @Field(() => version_groupsWhereUniqueInput, {nullable:false})
    @Type(() => version_groupsWhereUniqueInput)
    where!: version_groupsWhereUniqueInput;

    @Field(() => version_groupsCreateWithoutPokemon_formsInput, {nullable:false})
    @Type(() => version_groupsCreateWithoutPokemon_formsInput)
    create!: version_groupsCreateWithoutPokemon_formsInput;
}

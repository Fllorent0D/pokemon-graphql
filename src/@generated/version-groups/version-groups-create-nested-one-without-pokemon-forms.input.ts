import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateWithoutPokemon_formsInput } from './version-groups-create-without-pokemon-forms.input';
import { Type } from 'class-transformer';
import { version_groupsCreateOrConnectWithoutPokemon_formsInput } from './version-groups-create-or-connect-without-pokemon-forms.input';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';

@InputType()
export class version_groupsCreateNestedOneWithoutPokemon_formsInput {

    @Field(() => version_groupsCreateWithoutPokemon_formsInput, {nullable:true})
    @Type(() => version_groupsCreateWithoutPokemon_formsInput)
    create?: version_groupsCreateWithoutPokemon_formsInput;

    @Field(() => version_groupsCreateOrConnectWithoutPokemon_formsInput, {nullable:true})
    @Type(() => version_groupsCreateOrConnectWithoutPokemon_formsInput)
    connectOrCreate?: version_groupsCreateOrConnectWithoutPokemon_formsInput;

    @Field(() => version_groupsWhereUniqueInput, {nullable:true})
    @Type(() => version_groupsWhereUniqueInput)
    connect?: version_groupsWhereUniqueInput;
}

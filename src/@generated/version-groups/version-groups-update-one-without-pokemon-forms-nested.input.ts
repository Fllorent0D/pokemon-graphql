import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateWithoutPokemon_formsInput } from './version-groups-create-without-pokemon-forms.input';
import { Type } from 'class-transformer';
import { version_groupsCreateOrConnectWithoutPokemon_formsInput } from './version-groups-create-or-connect-without-pokemon-forms.input';
import { version_groupsUpsertWithoutPokemon_formsInput } from './version-groups-upsert-without-pokemon-forms.input';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';
import { version_groupsUpdateWithoutPokemon_formsInput } from './version-groups-update-without-pokemon-forms.input';

@InputType()
export class version_groupsUpdateOneWithoutPokemon_formsNestedInput {

    @Field(() => version_groupsCreateWithoutPokemon_formsInput, {nullable:true})
    @Type(() => version_groupsCreateWithoutPokemon_formsInput)
    create?: version_groupsCreateWithoutPokemon_formsInput;

    @Field(() => version_groupsCreateOrConnectWithoutPokemon_formsInput, {nullable:true})
    @Type(() => version_groupsCreateOrConnectWithoutPokemon_formsInput)
    connectOrCreate?: version_groupsCreateOrConnectWithoutPokemon_formsInput;

    @Field(() => version_groupsUpsertWithoutPokemon_formsInput, {nullable:true})
    @Type(() => version_groupsUpsertWithoutPokemon_formsInput)
    upsert?: version_groupsUpsertWithoutPokemon_formsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => version_groupsWhereUniqueInput, {nullable:true})
    @Type(() => version_groupsWhereUniqueInput)
    connect?: version_groupsWhereUniqueInput;

    @Field(() => version_groupsUpdateWithoutPokemon_formsInput, {nullable:true})
    @Type(() => version_groupsUpdateWithoutPokemon_formsInput)
    update?: version_groupsUpdateWithoutPokemon_formsInput;
}

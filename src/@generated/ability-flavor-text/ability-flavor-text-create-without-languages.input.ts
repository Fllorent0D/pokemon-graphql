import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateNestedOneWithoutAbility_flavor_textInput } from '../version-groups/version-groups-create-nested-one-without-ability-flavor-text.input';
import { abilitiesCreateNestedOneWithoutAbility_flavor_textInput } from '../abilities/abilities-create-nested-one-without-ability-flavor-text.input';

@InputType()
export class ability_flavor_textCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    flavor_text!: string;

    @Field(() => version_groupsCreateNestedOneWithoutAbility_flavor_textInput, {nullable:false})
    version_groups!: version_groupsCreateNestedOneWithoutAbility_flavor_textInput;

    @Field(() => abilitiesCreateNestedOneWithoutAbility_flavor_textInput, {nullable:false})
    abilities!: abilitiesCreateNestedOneWithoutAbility_flavor_textInput;
}

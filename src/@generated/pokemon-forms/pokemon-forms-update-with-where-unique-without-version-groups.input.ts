import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_formsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_formsUpdateWithoutVersion_groupsInput } from './pokemon-forms-update-without-version-groups.input';

@InputType()
export class pokemon_formsUpdateWithWhereUniqueWithoutVersion_groupsInput {

    @Field(() => pokemon_formsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_formsWhereUniqueInput)
    where!: pokemon_formsWhereUniqueInput;

    @Field(() => pokemon_formsUpdateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => pokemon_formsUpdateWithoutVersion_groupsInput)
    data!: pokemon_formsUpdateWithoutVersion_groupsInput;
}

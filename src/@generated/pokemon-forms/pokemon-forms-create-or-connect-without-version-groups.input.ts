import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_formsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_formsCreateWithoutVersion_groupsInput } from './pokemon-forms-create-without-version-groups.input';

@InputType()
export class pokemon_formsCreateOrConnectWithoutVersion_groupsInput {

    @Field(() => pokemon_formsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_formsWhereUniqueInput)
    where!: pokemon_formsWhereUniqueInput;

    @Field(() => pokemon_formsCreateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => pokemon_formsCreateWithoutVersion_groupsInput)
    create!: pokemon_formsCreateWithoutVersion_groupsInput;
}

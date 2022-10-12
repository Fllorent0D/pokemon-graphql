import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_formsCreateWithoutVersion_groupsInput } from './pokemon-forms-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { pokemon_formsCreateOrConnectWithoutVersion_groupsInput } from './pokemon-forms-create-or-connect-without-version-groups.input';
import { pokemon_formsWhereUniqueInput } from './pokemon-forms-where-unique.input';

@InputType()
export class pokemon_formsCreateNestedManyWithoutVersion_groupsInput {

    @Field(() => [pokemon_formsCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => pokemon_formsCreateWithoutVersion_groupsInput)
    create?: Array<pokemon_formsCreateWithoutVersion_groupsInput>;

    @Field(() => [pokemon_formsCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => pokemon_formsCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<pokemon_formsCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [pokemon_formsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_formsWhereUniqueInput)
    connect?: Array<pokemon_formsWhereUniqueInput>;
}

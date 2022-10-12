import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelogCreateWithoutAbilitiesInput } from './ability-changelog-create-without-abilities.input';
import { Type } from 'class-transformer';
import { ability_changelogCreateOrConnectWithoutAbilitiesInput } from './ability-changelog-create-or-connect-without-abilities.input';
import { ability_changelogWhereUniqueInput } from './ability-changelog-where-unique.input';

@InputType()
export class ability_changelogCreateNestedManyWithoutAbilitiesInput {

    @Field(() => [ability_changelogCreateWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_changelogCreateWithoutAbilitiesInput)
    create?: Array<ability_changelogCreateWithoutAbilitiesInput>;

    @Field(() => [ability_changelogCreateOrConnectWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_changelogCreateOrConnectWithoutAbilitiesInput)
    connectOrCreate?: Array<ability_changelogCreateOrConnectWithoutAbilitiesInput>;

    @Field(() => [ability_changelogWhereUniqueInput], {nullable:true})
    @Type(() => ability_changelogWhereUniqueInput)
    connect?: Array<ability_changelogWhereUniqueInput>;
}

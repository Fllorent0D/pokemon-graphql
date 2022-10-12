import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_namesCreateWithoutAbilitiesInput } from './ability-names-create-without-abilities.input';
import { Type } from 'class-transformer';
import { ability_namesCreateOrConnectWithoutAbilitiesInput } from './ability-names-create-or-connect-without-abilities.input';
import { ability_namesWhereUniqueInput } from './ability-names-where-unique.input';

@InputType()
export class ability_namesUncheckedCreateNestedManyWithoutAbilitiesInput {

    @Field(() => [ability_namesCreateWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_namesCreateWithoutAbilitiesInput)
    create?: Array<ability_namesCreateWithoutAbilitiesInput>;

    @Field(() => [ability_namesCreateOrConnectWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_namesCreateOrConnectWithoutAbilitiesInput)
    connectOrCreate?: Array<ability_namesCreateOrConnectWithoutAbilitiesInput>;

    @Field(() => [ability_namesWhereUniqueInput], {nullable:true})
    @Type(() => ability_namesWhereUniqueInput)
    connect?: Array<ability_namesWhereUniqueInput>;
}

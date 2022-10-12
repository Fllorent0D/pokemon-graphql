import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_flavor_textCreateWithoutAbilitiesInput } from './ability-flavor-text-create-without-abilities.input';
import { Type } from 'class-transformer';
import { ability_flavor_textCreateOrConnectWithoutAbilitiesInput } from './ability-flavor-text-create-or-connect-without-abilities.input';
import { ability_flavor_textWhereUniqueInput } from './ability-flavor-text-where-unique.input';

@InputType()
export class ability_flavor_textCreateNestedManyWithoutAbilitiesInput {

    @Field(() => [ability_flavor_textCreateWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_flavor_textCreateWithoutAbilitiesInput)
    create?: Array<ability_flavor_textCreateWithoutAbilitiesInput>;

    @Field(() => [ability_flavor_textCreateOrConnectWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_flavor_textCreateOrConnectWithoutAbilitiesInput)
    connectOrCreate?: Array<ability_flavor_textCreateOrConnectWithoutAbilitiesInput>;

    @Field(() => [ability_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => ability_flavor_textWhereUniqueInput)
    connect?: Array<ability_flavor_textWhereUniqueInput>;
}

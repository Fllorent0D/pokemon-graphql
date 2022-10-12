import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_proseCreateWithoutAbilitiesInput } from './ability-prose-create-without-abilities.input';
import { Type } from 'class-transformer';
import { ability_proseCreateOrConnectWithoutAbilitiesInput } from './ability-prose-create-or-connect-without-abilities.input';
import { ability_proseWhereUniqueInput } from './ability-prose-where-unique.input';

@InputType()
export class ability_proseUncheckedCreateNestedManyWithoutAbilitiesInput {

    @Field(() => [ability_proseCreateWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_proseCreateWithoutAbilitiesInput)
    create?: Array<ability_proseCreateWithoutAbilitiesInput>;

    @Field(() => [ability_proseCreateOrConnectWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_proseCreateOrConnectWithoutAbilitiesInput)
    connectOrCreate?: Array<ability_proseCreateOrConnectWithoutAbilitiesInput>;

    @Field(() => [ability_proseWhereUniqueInput], {nullable:true})
    @Type(() => ability_proseWhereUniqueInput)
    connect?: Array<ability_proseWhereUniqueInput>;
}

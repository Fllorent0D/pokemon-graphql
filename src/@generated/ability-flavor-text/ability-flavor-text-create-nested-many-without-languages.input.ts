import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_flavor_textCreateWithoutLanguagesInput } from './ability-flavor-text-create-without-languages.input';
import { Type } from 'class-transformer';
import { ability_flavor_textCreateOrConnectWithoutLanguagesInput } from './ability-flavor-text-create-or-connect-without-languages.input';
import { ability_flavor_textWhereUniqueInput } from './ability-flavor-text-where-unique.input';

@InputType()
export class ability_flavor_textCreateNestedManyWithoutLanguagesInput {

    @Field(() => [ability_flavor_textCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_flavor_textCreateWithoutLanguagesInput)
    create?: Array<ability_flavor_textCreateWithoutLanguagesInput>;

    @Field(() => [ability_flavor_textCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_flavor_textCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<ability_flavor_textCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [ability_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => ability_flavor_textWhereUniqueInput)
    connect?: Array<ability_flavor_textWhereUniqueInput>;
}

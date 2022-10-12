import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_flavor_textCreateWithoutLanguagesInput } from './ability-flavor-text-create-without-languages.input';
import { Type } from 'class-transformer';
import { ability_flavor_textCreateOrConnectWithoutLanguagesInput } from './ability-flavor-text-create-or-connect-without-languages.input';
import { ability_flavor_textUpsertWithWhereUniqueWithoutLanguagesInput } from './ability-flavor-text-upsert-with-where-unique-without-languages.input';
import { ability_flavor_textWhereUniqueInput } from './ability-flavor-text-where-unique.input';
import { ability_flavor_textUpdateWithWhereUniqueWithoutLanguagesInput } from './ability-flavor-text-update-with-where-unique-without-languages.input';
import { ability_flavor_textUpdateManyWithWhereWithoutLanguagesInput } from './ability-flavor-text-update-many-with-where-without-languages.input';
import { ability_flavor_textScalarWhereInput } from './ability-flavor-text-scalar-where.input';

@InputType()
export class ability_flavor_textUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [ability_flavor_textCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_flavor_textCreateWithoutLanguagesInput)
    create?: Array<ability_flavor_textCreateWithoutLanguagesInput>;

    @Field(() => [ability_flavor_textCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_flavor_textCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<ability_flavor_textCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [ability_flavor_textUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_flavor_textUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<ability_flavor_textUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [ability_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => ability_flavor_textWhereUniqueInput)
    set?: Array<ability_flavor_textWhereUniqueInput>;

    @Field(() => [ability_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => ability_flavor_textWhereUniqueInput)
    disconnect?: Array<ability_flavor_textWhereUniqueInput>;

    @Field(() => [ability_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => ability_flavor_textWhereUniqueInput)
    delete?: Array<ability_flavor_textWhereUniqueInput>;

    @Field(() => [ability_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => ability_flavor_textWhereUniqueInput)
    connect?: Array<ability_flavor_textWhereUniqueInput>;

    @Field(() => [ability_flavor_textUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_flavor_textUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<ability_flavor_textUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [ability_flavor_textUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_flavor_textUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<ability_flavor_textUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [ability_flavor_textScalarWhereInput], {nullable:true})
    @Type(() => ability_flavor_textScalarWhereInput)
    deleteMany?: Array<ability_flavor_textScalarWhereInput>;
}

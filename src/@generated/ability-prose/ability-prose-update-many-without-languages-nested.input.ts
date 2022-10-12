import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_proseCreateWithoutLanguagesInput } from './ability-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { ability_proseCreateOrConnectWithoutLanguagesInput } from './ability-prose-create-or-connect-without-languages.input';
import { ability_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './ability-prose-upsert-with-where-unique-without-languages.input';
import { ability_proseWhereUniqueInput } from './ability-prose-where-unique.input';
import { ability_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './ability-prose-update-with-where-unique-without-languages.input';
import { ability_proseUpdateManyWithWhereWithoutLanguagesInput } from './ability-prose-update-many-with-where-without-languages.input';
import { ability_proseScalarWhereInput } from './ability-prose-scalar-where.input';

@InputType()
export class ability_proseUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [ability_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_proseCreateWithoutLanguagesInput)
    create?: Array<ability_proseCreateWithoutLanguagesInput>;

    @Field(() => [ability_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<ability_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [ability_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<ability_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [ability_proseWhereUniqueInput], {nullable:true})
    @Type(() => ability_proseWhereUniqueInput)
    set?: Array<ability_proseWhereUniqueInput>;

    @Field(() => [ability_proseWhereUniqueInput], {nullable:true})
    @Type(() => ability_proseWhereUniqueInput)
    disconnect?: Array<ability_proseWhereUniqueInput>;

    @Field(() => [ability_proseWhereUniqueInput], {nullable:true})
    @Type(() => ability_proseWhereUniqueInput)
    delete?: Array<ability_proseWhereUniqueInput>;

    @Field(() => [ability_proseWhereUniqueInput], {nullable:true})
    @Type(() => ability_proseWhereUniqueInput)
    connect?: Array<ability_proseWhereUniqueInput>;

    @Field(() => [ability_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<ability_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [ability_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<ability_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [ability_proseScalarWhereInput], {nullable:true})
    @Type(() => ability_proseScalarWhereInput)
    deleteMany?: Array<ability_proseScalarWhereInput>;
}

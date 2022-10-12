import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flavor_textCreateWithoutLanguagesInput } from './move-flavor-text-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_flavor_textCreateOrConnectWithoutLanguagesInput } from './move-flavor-text-create-or-connect-without-languages.input';
import { move_flavor_textUpsertWithWhereUniqueWithoutLanguagesInput } from './move-flavor-text-upsert-with-where-unique-without-languages.input';
import { move_flavor_textWhereUniqueInput } from './move-flavor-text-where-unique.input';
import { move_flavor_textUpdateWithWhereUniqueWithoutLanguagesInput } from './move-flavor-text-update-with-where-unique-without-languages.input';
import { move_flavor_textUpdateManyWithWhereWithoutLanguagesInput } from './move-flavor-text-update-many-with-where-without-languages.input';
import { move_flavor_textScalarWhereInput } from './move-flavor-text-scalar-where.input';

@InputType()
export class move_flavor_textUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [move_flavor_textCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_flavor_textCreateWithoutLanguagesInput)
    create?: Array<move_flavor_textCreateWithoutLanguagesInput>;

    @Field(() => [move_flavor_textCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_flavor_textCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_flavor_textCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_flavor_textUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_flavor_textUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<move_flavor_textUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_textWhereUniqueInput)
    set?: Array<move_flavor_textWhereUniqueInput>;

    @Field(() => [move_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_textWhereUniqueInput)
    disconnect?: Array<move_flavor_textWhereUniqueInput>;

    @Field(() => [move_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_textWhereUniqueInput)
    delete?: Array<move_flavor_textWhereUniqueInput>;

    @Field(() => [move_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_textWhereUniqueInput)
    connect?: Array<move_flavor_textWhereUniqueInput>;

    @Field(() => [move_flavor_textUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_flavor_textUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<move_flavor_textUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_flavor_textUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => move_flavor_textUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<move_flavor_textUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [move_flavor_textScalarWhereInput], {nullable:true})
    @Type(() => move_flavor_textScalarWhereInput)
    deleteMany?: Array<move_flavor_textScalarWhereInput>;
}

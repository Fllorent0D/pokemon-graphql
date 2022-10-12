import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_class_proseCreateWithoutLanguagesInput } from './move-damage-class-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_damage_class_proseCreateOrConnectWithoutLanguagesInput } from './move-damage-class-prose-create-or-connect-without-languages.input';
import { move_damage_class_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './move-damage-class-prose-upsert-with-where-unique-without-languages.input';
import { move_damage_class_proseWhereUniqueInput } from './move-damage-class-prose-where-unique.input';
import { move_damage_class_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './move-damage-class-prose-update-with-where-unique-without-languages.input';
import { move_damage_class_proseUpdateManyWithWhereWithoutLanguagesInput } from './move-damage-class-prose-update-many-with-where-without-languages.input';
import { move_damage_class_proseScalarWhereInput } from './move-damage-class-prose-scalar-where.input';

@InputType()
export class move_damage_class_proseUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [move_damage_class_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_damage_class_proseCreateWithoutLanguagesInput)
    create?: Array<move_damage_class_proseCreateWithoutLanguagesInput>;

    @Field(() => [move_damage_class_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_damage_class_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_damage_class_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_damage_class_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_damage_class_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<move_damage_class_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_damage_class_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_damage_class_proseWhereUniqueInput)
    set?: Array<move_damage_class_proseWhereUniqueInput>;

    @Field(() => [move_damage_class_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_damage_class_proseWhereUniqueInput)
    disconnect?: Array<move_damage_class_proseWhereUniqueInput>;

    @Field(() => [move_damage_class_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_damage_class_proseWhereUniqueInput)
    delete?: Array<move_damage_class_proseWhereUniqueInput>;

    @Field(() => [move_damage_class_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_damage_class_proseWhereUniqueInput)
    connect?: Array<move_damage_class_proseWhereUniqueInput>;

    @Field(() => [move_damage_class_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_damage_class_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<move_damage_class_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_damage_class_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => move_damage_class_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<move_damage_class_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [move_damage_class_proseScalarWhereInput], {nullable:true})
    @Type(() => move_damage_class_proseScalarWhereInput)
    deleteMany?: Array<move_damage_class_proseScalarWhereInput>;
}

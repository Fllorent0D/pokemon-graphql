import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsCreateWithoutMove_damage_classesInput } from './stats-create-without-move-damage-classes.input';
import { Type } from 'class-transformer';
import { statsCreateOrConnectWithoutMove_damage_classesInput } from './stats-create-or-connect-without-move-damage-classes.input';
import { statsWhereUniqueInput } from './stats-where-unique.input';

@InputType()
export class statsUncheckedCreateNestedManyWithoutMove_damage_classesInput {

    @Field(() => [statsCreateWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => statsCreateWithoutMove_damage_classesInput)
    create?: Array<statsCreateWithoutMove_damage_classesInput>;

    @Field(() => [statsCreateOrConnectWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => statsCreateOrConnectWithoutMove_damage_classesInput)
    connectOrCreate?: Array<statsCreateOrConnectWithoutMove_damage_classesInput>;

    @Field(() => [statsWhereUniqueInput], {nullable:true})
    @Type(() => statsWhereUniqueInput)
    connect?: Array<statsWhereUniqueInput>;
}
